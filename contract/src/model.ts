class Topic {
    name: string;
    wallet: string;
    titul: string;
    description: string;
  
    constructor(name: string, wallet: string, titul: string, description: string) {
      this.name = name;
      this.wallet = wallet;
      this.titul = titul;
      this.description = description;
    }
  }
  
  // ...
  
  @call({ payableFunction: true })
  vote_topic({ name, wallet , titul, description } : { name: string, wallet: string,titul:string, description:string }) {
    // Recuperamos la cuenta que firma la transacción
    const sender = near.predecessorAccountId();
  
    
  
       
        return;
      }
    }
  }