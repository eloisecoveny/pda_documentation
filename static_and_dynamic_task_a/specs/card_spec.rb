require("minitest/autorun")
require("minitest/rg")
require_relative("../card")
require_relative("../testing_task_2")
require("pry")

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("hearts", 1)
    @card2 = Card.new("spades", 10)
    @card3 = Card.new("clubs", 4)
    @card4 = Card.new("diamonds", 5)
  end

  def test_checkforace__return_true
    assert_equal(true, CardGame.checkforace(@card1))
  end

  def test_checkforace__return_false
    assert_equal(false, CardGame.checkforace(@card2))
  end

  def test_highest_card__return_card2
    assert_equal(@card2, CardGame.highest_card(@card1, @card2))
  end

  def test_highest_card__return_card4
    assert_equal(@card4, CardGame.highest_card(@card4, @card3))
  end

  def test_cards_total__return_11
    assert_equal("You have a total of 11", CardGame.cards_total([@card1, @card2]))
  end

  def test_cards_total__return_9
    assert_equal("You have a total of 9", CardGame.cards_total([@card3, @card4]))
  end

end
