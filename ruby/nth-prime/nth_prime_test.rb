require 'minitest/autorun'
require_relative 'prime'

class TestPrimes < MiniTest::Unit::TestCase

  def test_first
    assert_equal 2, Prime.nth(1)
  end

  def test_second
    assert_equal 3, Prime.nth(2)
  end

  def test_sixth_prime
    assert_equal 13, Prime.nth(6)
  end

  def test_100th
    assert_equal 541, Prime.nth(100)
  end

  def test_1000th
    assert_equal 7919, Prime.nth(1000)
  end

  def test_1000th
    assert_equal 104729, Prime.nth(10000)
  end

  def test_big_prime
    start_time = Time.now
    assert_equal 104743, Prime.nth(10001)
    puts Time.now - start_time
  end

  def test_weird_case
    assert_raises ArgumentError do
      Prime.nth(0)
    end
  end
end
