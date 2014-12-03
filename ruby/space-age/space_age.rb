class SpaceAge
  attr_reader :seconds

  @@planet_years = { earth: 1,
                     mercury: 0.2408467,
                     venus: 0.61519726,
                     mars: 1.8808158,
                     jupiter: 11.862615,
                     saturn: 29.447498,
                     uranus: 84.016846,
                     neptune: 164.79132
                   }
  def initialize(seconds)
    @seconds = seconds
  end

  def method_missing(method, *args)
    super unless method[0..2] == 'on_'
    planet = method[3..-1].to_sym
    on_planet(planet)
  end

  def on_planet(planet)
    (@seconds / (@@planet_years[planet]*365.25*24*60*60)).round(2)
  end
end