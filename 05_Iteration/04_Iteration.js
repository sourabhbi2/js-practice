const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple',
    py: 'Python'
}

for (const key in myObj) {
    // console.log(key);
    console.log(`${key} shortcut for ${myObj[key]}`);
    
}