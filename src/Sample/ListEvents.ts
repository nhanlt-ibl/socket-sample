export const Types = ["Lotto", "BuyManagement", "Randao"];
export const Events = {
  Lotto: [
    "StopSellingInEmergency",
    "StartSelling",
    "ErrorStartInSelling",
    "ErrorHasNotSellingTime",
    "CalculateJackpot",
    "ResumeSelling",
    "PauseSelling",
    "MoveTotalSales",
    "MoveFundInEmergency",
    "CountJackpotTickets",
    "BuyParticipation"
  ],
  BuyManagement: ["SetSelfExclude", "SetSelfLimit"],
  Randao: [
    "CampaignStart",
    "Commit",
    "Random",
    "ErrorNotEnoughReveal",
    "ErrorNotEnoughParticipant",
    "ErrorOperatorNotReveal",
  ]
}

export const Data={
   test:"1" 
}