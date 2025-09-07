
import   PropTypes  from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 ml-4 mt-2 p-4 bg-gray-300 rounded-2xl'>
            <div>
                <h3 className='text-2xl'>ReadingTime : {readingTime}</h3>
            </div>
        <h2 className='text-3xl text-center  '>Bookmarks Blogs : {bookmarks.length} </h2>
              {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
              }
                </div>
    );
};
Bookmarks.PropTypes = {
    bookmarks:PropTypes.array,
  readingTime:PropTypes.number

}
export default Bookmarks;