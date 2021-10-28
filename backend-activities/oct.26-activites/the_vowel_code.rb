def encode(s)
    s.tr('aeiou', '12345')
  end
  
def decode(s)
    s.tr('12345', 'aeiou')
  end