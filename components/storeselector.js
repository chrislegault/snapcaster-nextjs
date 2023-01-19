import React from 'react'
import useStore from '@/store'
// all websites
// Aether Vault Games
// Atlas Collectables
// Border City Games
// The Connection Games
// Everything Games
// Exor Games
// Face to Face Games
// Fantasy Forged Games
// FirstPlayer
// 401 Games
// Fusion Gaming
// GameKnight
// Gamezilla
// Gauntlet Games
// Hairy Tarantula
// House of Cards
// Jeux 3 Dragons
// Manaforce
// Magic Stronghold
// Orchard City Games
// Sequence Gaming Brockville
// Topdeck Hero
// Wizard's Tower (kanatacg)

const websites = [
    {
        name: 'Aether Vault Games',
        code: 'aethervault',
    },
    {
        name: 'Atlas Collectables',
        code: 'atlas',
    },
    {
        name: 'Border City Games',
        code: 'bordercity',
    },
    {
        name: 'The Connection Games',
        code: 'connectiongames',
    },
    {
        name: 'Everything Games',
        code: 'everythinggames',
    },
    {
        name: 'Exor Games',
        code: 'exorgames',
    },
    {
        name: 'Face to Face Games',
        code: 'facetoface',
    },
    {
        name: 'Fantasy Forged Games',
        code: 'fantasyforged',
    },
    {
        name: 'FirstPlayer',
        code: 'firstplayer',
    },
    {
        name: '401 Games',
        code: 'four01',
    },
    {
        name: 'Fusion Gaming',
        code: 'fusiongaming',
    },
    {
        name: 'GameKnight',
        code: 'gameknight',
    },
    {
        name: 'Gamezilla',
        code: 'gamezilla',
    },
    {
        name: 'Gauntlet Games',
        code: 'gauntlet',
    },
    {
        name: 'Hairy Tarantula',
        code: 'hairyt',
    },
    {
        name: 'House of Cards',
        code: 'houseofcards',
    },
    {
        name: 'Jeux 3 Dragons',
        code: 'jeux3dragons',
    },
    {
        name: 'Manaforce',
        code: 'manaforce',
    },
    {
        name: 'Magic Stronghold',
        code: 'magicstronghold',
    },
    {
        name: 'Orchard City Games',
        code: 'orchardcity',
    },
    {
        name: 'Sequence Gaming',
        code: 'sequencegaming',
    },
    {
        name: 'Topdeck Hero',
        code: 'topdeckhero',
    },
    {
        name: 'Wizard\'s Tower (kanatacg)',
        code: 'wizardstower',
    },

]
export default function StoreSelector() {
    const { useMultiSearchStore } = useStore()
    const store = useMultiSearchStore()
  return (
    <div className="flex flex-col">
    <div className="grid md:grid-cols-3 grid-cols-2 w-full">
        {
            websites.map((website, index) => {
                return (
                    <div key={index} className="flex items-center bg-slate-800 hover:bg-slate-700  accent-purple-700 p-2 rounded-md m-1"
                    onClick={() => {
                        store.setWebsites({
                            ...store.websites,
                            [website.code]: !store.websites[website.code],
                        })
                    }}
                    >
                        <input 
                            type="checkbox"
                            checked={store.websites[website.code]}
                            onChange={(e) => {
                                store.setWebsites({
                                    ...store.websites,
                                    [website.code]: e.target.checked,
                                })
                            }}
                        />
                        <label className="ml-2 text-sm">{website.name}</label>
                    </div>
                )
            }
            )
        }
    </div>

    <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-md m-1" onClick={() => {
        let allSelected = {}
        websites.forEach((website) => {
            allSelected[website.code] = true
        })
        let noneSelected = {}
        websites.forEach((website) => {
            noneSelected[website.code] = false
        })
        if (JSON.stringify(store.websites) === JSON.stringify(allSelected)) {
            store.setWebsites(noneSelected)
        } else {
            store.setWebsites(allSelected)
        }
            
    }}>Select All</button>
      
        </div>

  )
}