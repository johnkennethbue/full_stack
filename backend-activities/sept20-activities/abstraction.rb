class Abstraction 
      
    public
    def publicMethod 
        puts "Reusable block of code."
        privateMethod
    end

    private
    def privateMethod 
        puts "Inaccesible method and can't be re-used."
    end
end

obj = Abstraction.new
obj.publicMethod