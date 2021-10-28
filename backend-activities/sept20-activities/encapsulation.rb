    
class Encapsulation
        
    def initialize(id, name, addr) 
     @cust_id = id 
     @cust_name = name 
     @cust_addr = addr 
     end
         
     def output() 
     puts "Customer id: #@cust_id"
     puts "Customer name: #@cust_name"
     puts "Customer address: #@cust_addr"
     end
    end
        
    customer_1 = Encapsulation.new("021-3492", "Walter White",
                            "New York") 
      
    customer_2 = Encapsulation.new("021-2309", "Jesse Pinkman",
                                "New Hampshire") 
        
    customer_1.output() 
    customer_2.output() 