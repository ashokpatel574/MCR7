import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useEffect, useState } from "react";
import { fakeFetch } from "../contants";

export const useFetch = (url) => {
  const [dataLists, setDataLists] = useState(null);
  const [errorLists, setErrorLists] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getBookData() {
    try {
      const bookData = await fakeFetch(url);
      setIsLoading(true);

      if (bookData?.status === 200) {
        setDataLists(bookData);
        setIsLoading(false);
      }
    } catch (error) {
      setErrorLists(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getBookData();
  }, []);

  return { dataLists, errorLists, isLoading };
};

const priceRangeFilter = (data, maxValue) => {
  return data.filter((item) => Number(item.discountprice) <= maxValue);
};

const sortByFilter = (data, sortBy) => {
  if (sortBy === "") {
    return data;
  }

  // switch (true) {
  //   case sortBy === SortBy.LowToHigh: {
  //     return [...data].sort((a, b) => a.discountprice - b.discountprice);
  //   }

  //   case sortBy === SortBy.HighToLow: {
  //     return [...data].sort((a, b) => b.discountprice - a.discountprice);
  //   }

  //   case sortBy === SortBy.LowRating: {
  //     return [...data].sort((a, b) => a.rating - b.rating);
  //   }

  //   case sortBy === SortBy.HighRating: {
  //     return [...data].sort((a, b) => b.rating - a.rating);
  //   }

  //   default: {
  //     return data;
  //   }
  // }
};

const ratingFilter = (data, ratingValue) => {
  if (ratingValue === "") {
    return data;
  }
  return data.filter((item) => item.rating >= ratingValue);
};

const categoryFilter = (data, categories) => {
  if (!categories.length) {
    return data;
  }

  return data.filter((listItem) => {
    return categories.some((categoryItem) => {
      return listItem.categoryName === categoryItem;
    });
  });
};

const stockAvailabiltyFilter = (data, stockAvailabilty) => {
  if (!stockAvailabilty.length) {
    return data;
  }

  return data.filter((listItem) => {
    return stockAvailabilty.some((StockItem) => {
      return StockItem === "exculdeOutOfStock" ? listItem.inStock : true;
    });
  });
};

const sizesFilter = (data, sizes) => {
  if (!sizes.length) {
    return data;
  }

  return data.filter((listItem) => {
    return sizes.some((selectedSizeItem) => {
      return listItem.sizes.includes(selectedSizeItem);
    });
  });
};

const searchFilter = (data, searchText) => {
  if (searchText === "") {
    return data;
  }

  return data.filter((productItem) => {
    return productItem.title
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
  });
};

const applyFilters = (products, filters) => {
  let filteredData = [...products];
  const {
    sortBy,
    priceRange,
    rating,
    categories,
    stockAvailabilty,
    sizes,
    searchText,
  } = filters;

  filteredData = searchFilter(filteredData, searchText);
  filteredData = priceRangeFilter(filteredData, priceRange);
  filteredData = sortByFilter(filteredData, sortBy);
  filteredData = ratingFilter(filteredData, rating);
  filteredData = categoryFilter(filteredData, categories);
  filteredData = stockAvailabiltyFilter(filteredData, stockAvailabilty);
  filteredData = sizesFilter(filteredData, sizes);

  return filteredData;
};

export const useFilterData = (products, filters) => {
  const newStateData = applyFilters(products, filters);
  return { filteredData: newStateData };
};
