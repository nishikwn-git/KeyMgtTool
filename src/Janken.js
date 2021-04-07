class Janken
{
    constructor(hand)
    {
        this.hand = hand
    }
    poi()
    {
        this.hand = Math.floor(Math.random() * 3)
    }
    judge(your)
    {
        const judgment = (computer_hand - human_hand + 3) % 3
        if (judgment == 0)
        {
            return "引き分け"
        }
        else if (judgment == 1)
        {
            return "勝ち"
        }

    }
}