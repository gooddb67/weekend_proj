import React from 'react';
import HouseFilter from './HouseFilter'
import HouseInfo from './HouseList'
import CreateHouseForm from './CreateHouseForm'
import HouseShow from './HouseShow'
import PageCountButton from './PageCountButton'
import BookData from './BookData'

const HouseContainer = (props) =>
  <div className="container">
    <div className="create-house">
      <CreateHouseForm
        inputChange={props.onInputChange}
        onSubmit={props.onSubmit}
        currentInput={props.currentInput}
      />
    </div>

    <div className="main-house-list">
      <HouseFilter
        filters={props.houses}
        handleChange={props.onUpdateFilter}
      />
      <HouseInfo
        houseData={props.houses}
        filter={props.currentFilter}
      />
    </div>

    <div className="book-section">
      <PageCountButton
        getBooks={props.onClick}/>
        <div className="book-info">
          <BookData
            books={props.books}/>
        </div>
    </div>

  </div>

HouseContainer.defaultProps = {
  houses: [],
  currentFilter: null,
  onUpdateFilter: () => {}
}

export default HouseContainer
