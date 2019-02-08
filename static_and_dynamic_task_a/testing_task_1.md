### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  # As this is a class method, it should be called upon the class "self.checkforace". A method should also be in lowercase, and ideally with underscores separating the words so it is clearer to read - i.e. "check_for_ace"
  def checkforAce(card)
    # To check of the card's value is equal to 1, "==" must be used to compare the values
    if card.value = 1
      return true
    else
      return false
    end
  end

  # misspelling of "def" to define the function below. This should also be a class method as opposed to an instance method. There should be a comma in-between each argument. Method has not been properly indented.
  dif highest_card(card1 card2)
  if card1.value > card2.value
    # A card does not have a ".name" variable. The card itself should be returned instead. Also it has not been specified if we are returning card1 or card2.
    return card.name
  else
    # It has not been specified to return card2 below
    card2
  end
end
# There is an additional unnecessary "end"
end

def self.cards_total(cards)
  # "Total" has not been assigned any initial value
  total
  for card in cards
    total += card.value
    # As the return statement is nested within the for loop, the loop will end once the first card value has been identified and added to "total". Also "total" should be interpolated within the string, as it will not be able to print the combine the string and the integer.
    return "You have a total of" + total
  end
end

# An "end" for the class is missing at the bottom


```
