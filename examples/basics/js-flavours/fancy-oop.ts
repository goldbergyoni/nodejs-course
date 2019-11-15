abstract class ServiceBase<T> {
    abstract addNew(): void;
}

class OrderService extends ServiceBase<Order>{
    public addNew(): void{
        //save order
    }
}




class Order{
    private id: number;
    private date: Date;
}