async function process() {
    let r = await fetch("/data.json");
    let data = await r.json();
    console.log(data)
    
    let mappedData = data.map(item => {
        return item['Насколько курс был полезен?']; // добавил конкретный ключ
    }) 
    console.log(mappedData)
    
    let uniqueValues = [...new Set(mappedData)] // это такой хитрый способ перегнать множество в список
    console.log(uniqueValues)
    
    let select = document.querySelector("#selectPoleznost");
    console.log(select)
    
    uniqueValues.forEach(item => {
        // создаем в памяти элемент выпадающего списка
        let option = document.createElement("option"); 
    
        option.value = item;  // устанавливаем значение элемента
        option.text = item; // устанавливаем текст элемента, он совпадает со значением
    
        select.add(option) // добавляем элемент к выпадающему списку
    })
}

process()