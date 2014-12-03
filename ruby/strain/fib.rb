fib = Enumerator.new do |f|
  a = b = 1
  loop do
    f << a
    a, b = b, a + b
  end
end

p fib.take(10)