import {
   BodyAccounts,
   AccountsLayout,
   Heroes,
   HeroesName,
   HeroeImg,
   HeroeSelectBody,
   HeroeSelect,
   Pagination,
   ButtonPagination,
   IsSelectedNft
} from './Accounts.styled'
import {Container, TextTitle} from '../Capes/Capes.styled'
import HeaderTop from '../../assets/img/header-top.png';
import HeaderBot from '../../assets/img/header-bot.png';
import out from '../../assets/img/out.svg'
import {logout} from '../../utils/near/utilsNear'
import { NoNft } from '../../components/NoNft/NoNft';
import {useState, useEffect, useCallback} from 'react';
import {useMoralis} from 'react-moralis';
import selectedNft from './img/selectedNft.svg'

const Accounts = () => {
   const [nftAccounts, setNftAccounts] = useState([]);
   const [account, setAccount] = useState('');
   const [pages, setPages] = useState(0)
   const [allPages, setAllPages] = useState(0);
   const {Moralis, user} = useMoralis();

   useEffect(() => {
      async function getNft() {
         const all_nft = await window.contract_nft.nft_tokens();
         let accountsNft = all_nft.filter((nft) => nft.owner_id === window.accountId);

         setAllPages(accountsNft.length)
         accountsNft = accountsNft.splice(pages * 4, 4)
         setNftAccounts(accountsNft)
      }

      getNft()
   }, [pages])

   useEffect(() => {
      async function getAccount() {
         const UserSettings = Moralis.Object.extend("settingUser");
         const query = new Moralis.Query(UserSettings);
         query.equalTo("user", user)
         const userSettings = await query.first()
         setAccount(userSettings === undefined ? '' : userSettings)
      }

      getAccount()
   }, [Moralis, user])

   const setAccounts = useCallback((idAccount) => () => {
      if(account === '') {
         const UserSettings = Moralis.Object.extend("settingUser");
         const newSettings = new UserSettings();
         newSettings.set("account", idAccount);
         newSettings.set("user", user);
         newSettings.save();

         return;
      } else {
         account.set("account", idAccount);
         account.save();
      }
   }, [user, account, Moralis.Object])

   const updatePages = useCallback((nameEvent) => () => {
      if(nameEvent === 'next') {
         console.log(pages)
         pages + 1 < Math.ceil(allPages / 4) && setPages(pages + 1)
      } else {
         pages > 0 && setPages(pages - 1)  
      }
   }, [pages, allPages]) 

   return(
      <Container>
         <img src={HeaderTop} alt="" className="img-fluid" />
            {nftAccounts.length ? // заменить на условие
               <h1 className="title">Chose your Pilgrim</h1>
               :
               <>
                  <p className="titlePages">
                     {window.accountId ? window.accountId : 'not accounts'}
                     {window.accountId && 
                        <img 
                           onClick={logout}
                           className="out"
                           src={out}
                           alt=""
                        />
                     }
                  </p>
                  <h1 className="titleNft">You do not have NFT Pilgrims.</h1>
               </>
            }
         <img src={HeaderBot} alt="" className="img-fluid" />

         {nftAccounts.length && // заменить на условие
            <TextTitle>
               Forgotten Runes Wizard's Cult is a decentralized approach to world-building. Worlds like Middle Earth, the Star Wars Galaxy, 
               and Westeros were built by singular, lone creators. Our Runiverse, however, is built by thousands of creators in our community.
            </TextTitle>
         }

         {nftAccounts.length ?
            <BodyAccounts>
               <AccountsLayout>
                  {nftAccounts.length && nftAccounts.map((hero) => (
                     <Heroes isSelected={typeof account !== "string" && account.attributes.account === hero.token_id}>
                        <HeroesName>{hero.metadata.title} (#{hero.token_id})</HeroesName>
                        <HeroeImg 
                           src={hero.metadata.media}
                           alt=""
                        />

                        {typeof account !== "string" && account.attributes.account === hero.token_id &&
                           <IsSelectedNft>
                              <img 
                                 src={selectedNft}
                                 alt=""
                              />
                           </IsSelectedNft>
                        }

                        <HeroeSelectBody>
                           <HeroeSelect onClick={setAccounts(hero.token_id)}>Enter</HeroeSelect> 
                        </HeroeSelectBody>
                     </Heroes>
                  ))}
               </AccountsLayout>

               <Pagination>
                  <ButtonPagination 
                     onClick={updatePages('prev')}
                     style={{"transform": "rotate(180deg)"}} 
                  />
                  <ButtonPagination 
                     onClick={updatePages('next')}
                  />
               </Pagination>
            </BodyAccounts>
            :
            <NoNft text="You can get your own Pilgrim on Paras to read comics!" />
         }
      </Container>
   )
}

export default Accounts;