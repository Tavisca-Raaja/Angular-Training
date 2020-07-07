export class Product{

   constructor(
       private id : string,
       private name : string,
       private category : string,
       private manufacturer : string, 
       private description : string,
       private price : number
       ) { }

       get ProductId ():string
       {
           return this.id;
       }

       set ProductId (value : string)
       {
           this.id = value;
       }

       get ProductName ():string
       {
            return this.name;
       }

       set ProductName (value : string)
       {
            this.name = value;
       }

       get Category ():string
       {
            return this.category;
       }

       set Category (value : string)
       {
            this.category = value;
       }

       get Description ():string
       {
            return this.description;
       }

       set Description (value : string)
       {
            this.description = value;
       }

       get Manufacturer ():string
       {
            return this.manufacturer;
       }

       set Manufacturer (value : string)
       {
            this.manufacturer = value;
       }

       get Price ():number
       {
            return this.price;
       }

       set Price (value : number)
       {
            this.price = value;
       }

}