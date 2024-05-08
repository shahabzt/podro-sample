import  { FC } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import { SearchBarSheet } from '../../styles/SearchBarSheet'
import LocationInformation from '../../components/locationInformation/LocationInformation'

const Search:FC = () => {
  return (
    <SearchBarSheet>
      <SearchBar/>
      <LocationInformation />


    </SearchBarSheet>
  )
}

export default Search