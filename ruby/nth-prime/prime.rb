def is_prime?(n)
  factors = (2..n/2).each do |x|
    return false if n%x == 0
  end
  true
end

module Prime

  @@primes = {1 => 2}

  def self.nth(n)
    raise ArgumentError, "Argument must be greater than 0" unless n > 0
    return @@primes[n] if @@primes[n]
    until @@primes.length == n
      next_prime
    end
    return @@primes[n]
  end

  private

  def self.next_prime
    x = @@primes.values.last + 1
    until is_prime?(x)
      x += 1
    end
    @@primes[@@primes.length + 1] = x
  end

end

##### the easy way: #####
# require 'prime'
# class Prime
#   def self.nth(n)
#     raise ArgumentError, "Argument must be greater than 0" unless n > 0
#     self.first(n).last
#   end
# end