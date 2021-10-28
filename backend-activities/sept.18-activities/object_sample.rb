class Ps5
    def initialize(games, release_date, cross_gen)
        @games = games,
        @release_date = release_date,
        @cross_gen = cross_gen
        @is_compatible = "true"
    end

def ps5_playable
    @is_compatible = "true"
    puts "This game is exclusive on PS5."
end

def ps5_not_playable
    @is_compatible = "false"
    puts "This game is only compatible for PS4."
end

def ps5_cross_gen
    @is_compatible = "true" || "false"
    puts "This game can be played on PS4/PS5."
end
end