var gallery ={
	images: [
		{
			"name": "cat",
			"path": "images/cat.png",
			"description": "The best cat ever",
			"date": "2014-07-21T09:05:34.540Z"
		},
		{
			"name": "dog",
			"path": "images/dog.png",
			"description": "The best dof ever",
			"date": "2014-07-21T09:06:05.544Z"
		},
		{
			"name": "giraffe",
			"path": "images/giraffe.png",
			"description": "",
			"date": "2014-07-21T09:07:24.187Z"
		},
		{
			"name": "dinosaur",
			"path": "images/dinosaur.png",
			"description": "The best dinosaur ever",
			"date": "2014-07-21T09:07:47.683Z"
		}
	]
}
var gallery2 ={
	images: [
		{
			"name": "bird",
			"path": "images/bird.png",
			"description": "The best bird ever",
			"date": "2014-07-21T09:05:34.540Z"
		},
		{
			"name": "pig",
			//"path": "images/pig.png",
			"description": "",
			"date": "2014-07-21T09:06:05.544Z"
		}
	]
}
var ImagesCollectionName = "images";

//1
//ДОДАЄМО зображення

showInformation("ДОДАВАННЯ ЗОБРАЖЕНЬ ДО ГАЛЕРЕЇ");

function addImage(collectionName, newImage){
    this[collectionName].push(newImage);
    var message = "<b>Додано зображення</b>";
    if(newImage.hasOwnProperty("name")){
        message = message + " \"" + newImage.name + "\"";
    }
    else{
         message = message + " \"nonamed\"";
    }
    showInformation(message);
}

var newImage={
    name:"horse",
    path:"images/horse.png",
	description:"The best horse ever",
	date:new Date().toISOString()
}

addImage.call(gallery, ImagesCollectionName, newImage);
showImagesInformation.call(gallery, ImagesCollectionName);
showInformation("<hr/>");

//КОРЕКТУЄМО

showInformation("РЕДАГУВАННЯ ЗОБРАЖЕНЬ ГАЛЕРЕЇ");
function changeKeysValue(collectionName, imageIndex, key, newValue, newkey, newkeyvalue){
    var imagesCollection = this[collectionName];
    var targetImage = imagesCollection[imageIndex];
    targetImage[key] = newValue; 
	targetImage[newkey] = newkeyvalue;
    showInformation("Властивість ключа \"" + key + "\"зображення з індексом " + imageIndex+ " була змінена на значення \"" + newValue + "\"");
	showInformation("В зображення з індексом " + imageIndex+ " добавлено ключ \"" + newkey + "\"");
}
changeKeysValue.call(gallery, ImagesCollectionName, 0, "name", "kitten", "price", "1000");
showImagesInformation.call(gallery, ImagesCollectionName);
showInformation("<hr/>");


//ВИДАЛЯЄМО
showInformation("ВИДАЛЕННЯ ЗОБРАЖЕНЬ ГАЛЕРЕЇ");
function removeImages(collectionName, startIndex, count){
    var imagesCollection = this[collectionName];
    
    var message = "<b>Видалено зображення:</b> ";
    for(var i=startIndex; i<(startIndex + count); i++)
    {
		if(i >= imagesCollection[i].length) break;
        message = message +  imagesCollection[i].name  + ", ";
    }
	imagesCollection.splice(startIndex, count);
    showInformation(message);
}
removeImages.call(gallery, ImagesCollectionName, 3, 2);
showImagesInformation.call(gallery, ImagesCollectionName);
showInformation("<hr/>");

//2

function showImagesInformation(collectionName)
{
    for(var i=0; i<this[collectionName].length; i++)
    {
        showImageInformation(this[collectionName][i]);
        showInformation("-----------------------");
    }
}
function showImageInformation(imageObject)
{
    for (var key in imageObject) {
            if (imageObject.hasOwnProperty(key)) {
                showInformation(key + ": " + imageObject[key]);
            }
        }
}
showInformation("ВІДОБРАЖЕННЯ ЗОБРАЖЕНЬ ГАЛЕРЕЇ");
showImagesInformation.call(gallery, ImagesCollectionName);

function showInformation(information){
    document.write(information + "</br>");
}
showInformation("<hr/>");

//3
//СОРТУВАННЯ
showInformation("СОРТУВАННЯ ЗОБРАЖЕНЬ ГАЛЕРЕЇ");
function sortBy(collectionName, key){   
    this[collectionName].sort(function(obj1, obj2){
        if (!obj1.hasOwnProperty(key) || !obj2.hasOwnProperty(key)){
            return -1;
        }
        if (obj1[key] < obj2[key]) return -1;
        if (obj1[key] > obj2[key]) return 1;
        return 0;
    });
    showInformation("<b>Відсортовані картинки:</b> ");
    showImagesInformation.call(this, collectionName)
}
sortBy.call(gallery, ImagesCollectionName, "name");
showInformation("<hr/>");

//4
//ФІЛЬТРАЦІЯ
showInformation("ФІЛЬТРАЦІЯ ЗОБРАЖЕНЬ ГАЛЕРЕЇ");
function filterByParam(collectionName, param){
    showInformation("<b>Фільтр картинок по полю \"" + param + "\":</b>");
    var targetImagesCollection = this[collectionName];
    for(var i=0; i<targetImagesCollection.length; i++){
        if (targetImagesCollection[i].hasOwnProperty(param)){
                showImageInformation(targetImagesCollection[i]);
        }
    }     
}
filterByParam.call(gallery, ImagesCollectionName, 'price');
showInformation("<hr/>");

//5
//СЕРИАЛІЗАЦІЯ
showInformation("СЕРИАЛІЗАЦІЯ ГАЛЕРЕЇ");
function serialize(){
    var jsonText = JSON.stringify(this);
    var jsonText2 = JSON.stringify(this,[ImagesCollectionName,"name"]);
    showInformation("<b>Сериалізованый обєкт</b> "+jsonText);
    showInformation("<b>Сериалізовані лише імена зображень</b> "+jsonText2);
}
serialize.call(gallery);
showInformation("<hr/>");

//6
//ПРЕВІРКА НА ОПИС
showInformation("ПРЕВІРКА НА НАЯВНІСТЬ ПОЛЯ ГАЛЕРЕЇ");
function check(collectionName,param){
    for(var i=0; i<this[collectionName].length; i++){
        if(this[collectionName][i][param]==""){
            showInformation("У зображення " + this[collectionName][i]['name'] + " відсутній опис");
        }
    }
}
check.call(gallery, ImagesCollectionName, "description");
showInformation("<hr/>");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ДОБАВЛЕНИЕ ИЗОБРАЖЕНИЯ В ДРУГУЮ ГАЛЕРЕЮ
showInformation("ДОБАВЛЕНИЕ ИЗОБРАЖЕНИЯ В ДРУГУЮ ГАЛЕРЕЮ");
    var newImage1={
        name:"cat",
        path:"images/cat.png",
	    description:"The best cat ever",
	    date:new Date().toISOString()
    }    
addImage.call(gallery2, ImagesCollectionName, newImage1);
showImagesInformation.call(gallery2, ImagesCollectionName);
showInformation("<hr/>");

//КОРЕКТУЄМО ЗОБРАЖЕННЯ ДРУГОЇ ГАЛЕРЕЇ
showInformation("КОРЕКТУЄМО ЗОБРАЖЕННЯ ДРУГОЇ ГАЛЕРЕЇ");
changeKeysValue.call(gallery2, ImagesCollectionName, 0, "name", "rabbit", "price", "1000");
showImagesInformation.call(gallery2, ImagesCollectionName);
showInformation("<hr/>");

//ВИДАЛЕННЯ ЗОБРАЖЕНЬ ДРУГОЇ ГАЛЕРЕЇ
showInformation("ВИДАЛЕННЯ ЗОБРАЖЕНЬ ДРУГОЇ ГАЛЕРЕЇ");
removeImages.call(gallery2, ImagesCollectionName, 2, 1);
showImagesInformation.call(gallery2, ImagesCollectionName);
showInformation("<hr/>");

//ВІДОБРАЖЕННЯ ЗОБРАЖЕНЬ ДРУГОЇ ГАЛЕРЕЇ
showInformation("ВІДОБРАЖЕННЯ ЗОБРАЖЕНЬ ДРУГОЇ ГАЛЕРЕЇ");
showImagesInformation.call(gallery2, ImagesCollectionName);
showInformation("<hr/>");

//СОРТУВАННЯ ЗОБРАЖЕНЬ ДРУГОЇ ГАЛЕРЕЇ
showInformation("СОРТУВАННЯ ЗОБРАЖЕНЬ ДРУГОЇ ГАЛЕРЕЇ");
sortBy.call(gallery2, ImagesCollectionName, "name");
showInformation("<hr/>");

//ФІЛЬТРАЦІЯ ЗОБРАЖЕНЬ ДРУГОЇ ГАЛЕРЕЇ
filterByParam.call(gallery2, ImagesCollectionName, 'price');
showInformation("<hr/>");

//СЕРИАЛІЗАЦІЯ ЗОБРАЖЕНЬ ДРУГОЇ ГАЛЕРЕЇ
serialize.call(gallery2);
showInformation("<hr/>");

//ПЕРЕВІРКА НА НАЯВНІСТЬ ПОЛЯ ЗОБРАЖЕНЬ ДРУГОЇ ГАЛЕРЕЇ
check.call(gallery2, ImagesCollectionName, "description");
showInformation("<hr/>");