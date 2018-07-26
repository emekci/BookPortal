import React from 'react'

function ShoppingTitle(props){
return(  
    <div>
    <h1>{props.title}</h1>
    <h1>Total Number of Items:{props.items}</h1>
        </div>
)
}
function ListItem(props){
    const isBold = props.isBold;
   
        return(isBold ? <b><li>{props.item}</li></b> : <li>{props.item}</li> )

}
function ShoppingList(props){
    
    return(
        <div>
        <h2>{props.header} size:{props.size}</h2>
        <ol>
            {props.item.map(
                function(item,i){ //array'in elemanlarını başka bir şeye dönüştürüp başka bir array oluşturuyor. ==> For döngüsü 
                return <ListItem key={i} item={item} isBold={i===1} />
            })}

        </ol>

        </div>

    )

}
function ShoppingApp(props){
    return(
        <div>
        <ShoppingTitle title="My Shopping List" items="9"/>
        <ShoppingList header="Food" size="3" item={["Apple","Bread","Cheese"]}/>
        <ShoppingList header="Clothes" size="3" item={["Shirt","Pants","Hat"]}/>
        <ShoppingList header="Supplies" size="3" item={["Pen","Paper","Glue"]}/>
        </div>
    )

}

 /* functionShoppingApp(props){
    const data={
        title:"My Shopping List",
        categories: [
             {
            header: "Food",
            title:["Apple","Bread","Cheese"]
        },
        {
            header:"Clothes",
            title:["Shirt","Pants","Hat"]
        },
        {
            header:"Food",
            title:["Pen","Paper","Glue"]
        }
    ]
};
const numItems=data.categories.reduce((statusbar,category)=>{
    return category.items.length + start;
},0 );

return(
<div>
<ShoppingTitle title = {data.title} number={numItems} />
{data.categories.map(function(category,i){
    <ShoppingList cat={category.header} items={category.item} key={category.title + i} />
})}

</div>

)
}
*/
export default ShoppingApp;

