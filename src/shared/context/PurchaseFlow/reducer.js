export const PURCHASE_FLOW = [
  {
    routeName: 'ProposalForm',
    title: 'Choose your package',
    index: 0
  },
  {
    routeName: 'RequiredDocuments',
    title: 'Required documents',
    index: 1
  },
  {
    routeName: 'ApplicationForm',
    title: 'Application form',
    index: 2
  },
  // {
  //   routeName: 'ApplicationFormBusinessInfo',
  //   title: 'Application form',
  //   index: 3
  // },
  // {
  //   routeName: 'Beneficiary',
  //   title: 'Beneficiary form',
  //   index: 4
  // },
  // {
  //   routeName: 'HealthQuestions',
  //   title: 'Health Survey',
  //   index: 5
  // },
  // {
  //   routeName: 'Billing',
  //   title: 'Billing',
  //   index: 6
  // },
  // {
  //   routeName: 'PolicyInformation',
  //   title: 'Cocolife Policy Information',
  //   index: 7
  // },
]

export const initialState = {
  currentPosition: PURCHASE_FLOW[0]
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'next':
      return {
        currentPosition: PURCHASE_FLOW[state.currentPosition.index + 1]
      }
    case 'back':
      return {
        currentPosition: PURCHASE_FLOW[state.currentPosition.index - 1]
      }
  }
}