
var bestHorrorStoriestoRead = 
['_30_days_of_night', 
 'at_mountains_of_madness', 
 'the_bad_seed', 
 'beloved', 
 'the_bloody_chamber', 
 'carrie', 
 'the_case_against_satan', 
 'the_changeling', 
 'come_closer', 
 'the_damned_highway'];
console.log(bestHorrorStoriestoRead);

let mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);

let head = document.createElement('h1');
mainDiv.appendChild(head);
head.innerHTML = 'The Best Horror Books of All Time'; 

// let logo = document.createElement('img');
// mainDiv.appendChild(logo);
// logo.src = './image/horror10.png'

const infoBooks= {
    _30_days_of_night: { title: '30 Days Of Night', author: 'Steve Niles', language: 'English', page: '124'},
    at_mountains_of_madness: { title: 'At Mountains Of Madness', author: 'H.P. Lovecraft', language: 'English', page: '224'},
    the_bad_seed: { title: 'The Bad Seed', author: 'William March', language: 'English', page: '224'},
    beloved: { title: 'Beloved', author: 'Toni Morrison', language: 'English', page: '360'},
    the_bloody_chamber: { title: 'The Bloody Chamber', author: 'Angela Carter', language: 'English', page: '176'},
    carrie: { title: 'Carrie', author: 'Stephen King', language: 'English', page: '320'},
    the_case_against_satan: { title: 'The Case Against Satan', author: 'Ray Russell', language: 'English', page: '160'},
    the_changeling: { title: 'The Changeling', author: 'Victor LaValle', language: 'English', page: '448'},
    come_closer: { title: 'Come Closer', author: 'Sara Gran', language: 'English', page: '176'},
    the_damned_highway: { title: 'The Damned Highway', author: 'Nick Mamatas', language: 'English', page: '232'},
}

function makeBookList(){
    let div2 = document.createElement('div');
    document.body.appendChild(div2);
    var bookList = ['30 Days Of Night', 'At Mountains Of Madness', 'The Bad Seed', 'Beloved', 'The Bloody Chamber', 'Carrie', 'The Case Against Satan', 'The Changeling', 'Come Closer', 'The Damned Highway']
    var ol = document.createElement('ol');
    div2.appendChild(ol);

    for (let i=0; i<bookList.length; i++) {
    var book = bookList[i];
   
    var li = document.createElement('li');
    ol.appendChild(li);
    //li.appendChild(document.createTextNode(book));
    li.innerHTML =bookList[i];
    li.setAttribute('id', bestHorrorStoriestoRead[i]);
    
    }

}
//makeBookList();

function detailsBooksInfo () {
    for ( i in infoBooks) {
        console.log(i)
        console.log(infoBooks[i])

        let h1element = document.createElement('h1');
        h1element.innerHTML= infoBooks[i].title
        document.body.appendChild(h1element);

        let ulElement = document.createElement('ul');
        document.body.appendChild(ulElement);

        let liElement1 = document.createElement('li');
        liElement1.innerHTML = infoBooks[i].author
        ulElement.appendChild(liElement1)
        liElement1.setAttribute('id', i)

        let liElement2 = document.createElement('li');
        liElement2.innerHTML = infoBooks[i].language
        ulElement.appendChild(liElement2)

        let liElement3 = document.createElement('li');
        liElement3.innerHTML = infoBooks[i].page + ' pages'
        ulElement.appendChild(liElement3)
        
    }
}
detailsBooksInfo()

let bookCover = {
    _30_days_of_night: './image/1.jpg',
    at_mountains_of_madness: './image/2.jpg',
    the_bad_seed: './image/3.jpg',
    beloved: './image/4.jpg',
    the_bloody_chamber: './image/5.jpg',
    carrie: './image/6.jpg',
    the_case_against_satan: './image/7.jpg',
    the_changeling: './image/8.jpg',
    come_closer: './image/9.jpg',
    the_damned_highway: './image/10.jpg'
}

let imgkey = Object.keys(bookCover)

function addImagetoList(imgkey) {
    for (i in bookCover) {
        let imgElement = document.createElement('img')
        imgElement.setAttribute('src', bookCover[i])
        imgElement.setAttribute('width', '300px')
        imgElement.setAttribute('height', '250px')
        document.getElementById(i).appendChild(imgElement)
    }

}
addImagetoList()