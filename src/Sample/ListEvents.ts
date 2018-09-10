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
export const Data = {
  "StopSellingInEmergency": {
    event: "StopSellingInEmergency",
    args: {
      draw: '2'
    },
  },
  "StartSelling": {
    event: "StartSelling",
    args: {
      draw: '2'
    },
  },
  "ErrorStartInSelling": {
    event: "ErrorStartInSelling",
    args: {
      draw: '2'
    },
  },
  "ErrorHasNotSellingTime": {
    event: "ErrorHasNotSellingTime",
    args: {
      draw: '2'
    },
  },
  "CalculateJackpot": {
    event: "CalculateJackpot",
    args: {
      draw: '5',
      winningJackpotTotal: '0',
      isFinish: false
    },
  },
  "ResumeSelling": {
    address: '0x2ced956e62e1b1518cf0a6eb17dccb61d751d67e',
    event: 'ResumeSelling',
    args: {
      draw: '2'
    },
  },
  "PauseSelling": {
    event: "PauseSelling",
    args: {
      draw: '2'
    },
  },
  "MoveTotalSales": {
    event: "MoveTotalSales",
    args: {
      drawFrom: '10',
      drawTo: '16',
      participation: '0x000000000000000000000000000000000000000000000000000506070e121a21',
      buyer: '0xdb92f3247a9098d017b281fefeaae0866755129a',
      seller: '0xacdd5babfc0f518c64cc369537e7b87335909c9c'
    }
  },
  "MoveFundInEmergency": {
    event: "MoveFundInEmergency",
    args: {
      drawFrom: '10',
      drawTo: '16',
      participation: '0x000000000000000000000000000000000000000000000000000506070e121a21',
      buyer: '0xdb92f3247a9098d017b281fefeaae0866755129a',
      seller: '0xacdd5babfc0f518c64cc369537e7b87335909c9c'
    },
  },
  "CountJackpotTickets": {
    address: '0x2ced956e62e1b1518cf0a6eb17dccb61d751d67e',
    event: 'CountJackpotTickets',
    args: {
      draw: '5',
      winningJackpotTotal: '0',
      isFinish: false
    },
  },
  "BuyParticipation": {
    address: '0x0fbdb07bc5b92613ffccb81366e4dd876928f088',
    event: 'BuyParticipation',
    args: {
      drawFrom: '10',
      drawTo: '16',
      participation: '0x000000000000000000000000000000000000000000000000000506070e121a21',
      buyer: '0xdb92f3247a9098d017b281fefeaae0866755129a',
      seller: '0xacdd5babfc0f518c64cc369537e7b87335909c9c'
    },
  },
  "CampaignStart": {
    event: 'CampaignStart',
    args: {
      draw: '5',
      campaign: '1',
      blockStart: '402325',
      participantCommitDuration: '60',
      participantRevealDuration: '10',
      operatorRevealDuration: '30',
      deposit: '1000000000000000000',
      encryptedSecret: '0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6',
      minParticipants: '2',
      minReveals: '2',
      blacklistThreshold: '3'
    },
  },
  "Commit": {
    address: '0xe7918ea9a7cd4c4ca140f5d51482f0401a66b8f9',
    event: 'Commit',
    args: {
      draw: '5',
      campaign: '1',
      executor: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',
      encryptedSecret: '0x0dce095f6c19f6a27fda72613455123ec95357642a447450726d759a1cac3ca3'
    },
  },
  "Random": {},
  "ErrorNotEnoughReveal": {
    address: '0xe7918ea9a7cd4c4ca140f5d51482f0401a66b8f9',
    event: 'ErrorNotEnoughReveal',
    args: {
      draw: '5',
      campaign: '1',
      minReveals: '2',
      numberReveals: '1'
    },
  },
  "ErrorNotEnoughParticipant": {},
  "ErrorOperatorNotReveal": {},
  "SetSelfLimit": {
    address: '0x63c633d18127bcb9c331817080c334f58eb72a16',
    event: 'SetSelfLimit',
    args: {
      buyer: '0x1917b402d2dc7127afc44cec24e76f90aa6d95dc',
      numColumns: '50',
      selfLimitEndTime: '1536593548'
    }
  },
  "SetSelfExclude": {
    address: '0x63c633d18127bcb9c331817080c334f58eb72a16',
    event: 'SetSelfExclude',
    args: {
      buyer: '0x1917b402d2dc7127afc44cec24e76f90aa6d95dc',
      selfExcludeEndTime: '1536594109'
    },
  }
}