import {Product} from './Product';

export class ProductLogic{
    private Products : Array<Product>;

    constructor()
    {
        this.Products = new Array<Product>();
    }

    public getAllProducts() : Array<Product>
    {
        return this.Products;
    }

    public getProductsByCategory(category : string) : Array<Product>
    {
        return this.Products.filter(product =>{
            return product.Category === category;
        } );
    }

    public getProductsByManufacturer(manufacturer : string) : Array<Product>
    {
        return this.Products.filter(product =>{
           return product.Manufacturer === manufacturer;
        } );
    }

    public addProduct(id:any,name:any,description:any,manufacturer:any,category:any,price:number) : Array<Product>
    {
        if(this.IsValidProductId(id))
        {
            if(this.IsValidateProduct(name,category,description,price))
            {
                let newProduct = this.createProduct(id,name,category,manufacturer,description,price);
                this.Products.push(newProduct);
                return this.Products;
            }
        }
        else
        {
            throw new Error("product already exists");
            
        }
    }

    public updateProduct(id:any,name:any,description:any,manufacturer:any,category:any,price:number) : Product
    {

        if(this.IsValidateProduct(name,category,description,price))
        {
            let index = this.Products.findIndex(prod => prod.ProductId === id);

            if(index == -1)
            {
                throw new Error('Product not found');
            }
            else
            {
               this.Products[index] = this.createProduct(id,name,description,category,manufacturer,price);
               return this.Products[index];
            }
        }
       
    }

    public deleteProduct(productId : string) : Array<Product>
    {

        let requiredProduct = this.Products.findIndex(prod => prod.ProductId === productId);
        this.Products.splice(requiredProduct,1);

        return this.Products;
    }

    public SaveAllProducts(products:Array<Product>)
    {
        this.Products.push(...products);
    }

    
    private createProduct(id:string,name:string,description:string,category:string,manufacturer:string,price:number) : Product
    {
        return new Product(id,name,category,manufacturer,description,price)
    }

    private IsValidProductId(id:string) : boolean
    {
        for (var product of this.Products) 
        {
           if(product.ProductId === id)
           {
               return false;
           }   
        }

        return true;
    }

    private IsValidateProduct(name:any,category:any,description:any,price:any) : boolean
    {
      if(typeof(name) !== 'string' || typeof(category) !=='string' || typeof(description) !== 'string' || typeof(price) !== 'number')
      {
          throw new Error("Invalid type is provided");
      }

      if(description.length > 100)
      {
          throw new Error("Description is too long");
          
      }

      return true;
       
    }
}
