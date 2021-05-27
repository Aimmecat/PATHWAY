/*
 * @Author: your name
 * @Date: 2021-05-26 16:11:58
 * @LastEditTime: 2021-05-26 17:17:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Github\Frontends\src\pages\base\G6\APP\data.tsx
 */
const data = {
    id: 'Hematopietic stem cell',
    children: [
      {
        id: 'Lymphoid stem cell Double-negative cell(DNI)',
        children: [
          {
            id: 'Lymphoid Related Dendritic cell(1)',
          },
          {
            id: 'Pro T cell(DN2)',     
            children:[
              {
                id:'Lymphoid Related Dendritic cell(2)'
              },
              {
                id:'DN3',
                children:[
                  {
                    id:'DN4',
                    children:[
                      {
                        id:'Intermediate single-postive cell(ISP)',
                        children:[
                          {
                            id:'Double-positive cell(DP)',
                            children:[
                              {
                                id:'CD8 T Cell',
                              },
                              {
                                id:'CD4 T Cell',
                              },
                              {
                                id:'Regulatory T cell',
                              },
                              {
                                id:'NKT cell',
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id:'γδ T cell'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'NK cell Precursor(1)',
            children:[
              {
                id: 'NK cell Precursor(2)', 
                children:[
                  {
                    id:'NK cell'
                  }
                ]    
              },
            ]        
          },
          {
            id: 'Pro B Cell',  
            children:[
              {
                id:'Pre B I cell',
                children:[
                  {
                    id:'Pre B II cell',
                    children:[
                      {
                        id:'Immature B cell',
                        children:[
                          {
                            id:'B Cell'   
                          }
                        ]   
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'Myeloid Stem Cell',  
        children:[
          {
            id:'CFU-GEMM',
            children:[
              {
                id:'CFU-Mast',
                children:[
                  {
                    id:'Mast cell'
                  }
                ]
              },
              {
                id:'CFU-Bas',
                children:[
                  {
                    id:'Myeloblast(1)',
                    children:[
                      {
                        id:'Basophilic Myelocyte',
                        children:[
                          {
                            id:'Basophil'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id:'CFU-E0',
                children:[
                  {
                    id:'Myeloblast(2)',
                    children:[
                      {
                        id:'Eosinophilic Myelocyte',
                        children:[
                          {
                            id:'Eosinophil'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id:'CFU-GM',
                children:[
                  {
                    id:'CFU-M/DC',
                    children:[
                      {
                        id:'Myeloid Related Dendritic Cell(1)'
                      },
                      {
                        id:'Monoblast',
                        children:[
                          {
                            id:'Promonocyte',
                            children:[
                              {
                                id:'Monocyte',
                                children:[
                                  {
                                    id:'Myeloid Related Dendritic Cell(2)'
                                  }
                                ]
                              },
                              {
                                id:'Macrophage'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id:'CFU-G',
                    children:[
                      {
                        id:'Myeloblast',
                        children:[
                          {
                            id:'Neutrophilic Myelocyte',
                            children:[
                              {
                                id:'Neutrophil'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id:'BFU-E',
                    children:[
                      {
                        id:'CFU-E',
                        children:[
                          {
                            id:'Proerythroblast',
                            children:[
                              {
                                id:'Erythrocyte'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id:'BFU-MK',
                    children:[
                      {
                        id:'CFU-MK',
                        children:[
                          {
                            id:'Mega-karyocyte',
                            children:[
                              {
                                id:'Platelets'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          } 
        ]   
      }
    ]
  };

export default data;