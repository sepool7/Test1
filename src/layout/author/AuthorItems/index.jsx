// styled components
import {StyledAuthorItems, CollectionsGrid} from './style';

// components
import StyledTabs from '@ui/StyledTabs';
import ItemsGrid from '@components/ItemsGrid';
import Pagination from '@ui/Pagination';
import CollectionItem from '@components/CollectionItem';

// hooks
import usePagination from '@hooks/usePagination';

// data placeholder
import author from '@db/author';

const SingleItems = ({content}) => {
    const pagination = usePagination(content, 12);

    return (
        <div className="tab-content" ref={pagination.containerRef}>
            <ItemsGrid items={pagination.currentItems()} isPrivate />
            {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
        </div>
    )
}

const Collections = ({content}) => {
    const pagination = usePagination(content, 6);

    return (
        <div className="tab-content" ref={pagination.containerRef}>
            <CollectionsGrid>
                {
                    pagination.currentItems().map((item, index) => (
                        <CollectionItem item={item} index={index} key={index} isPrivate />
                    ))
                }
            </CollectionsGrid>
            {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
        </div>
    )
}

const AuthorItems = () => {
    const likedItems = author.creations.filter(item => item.isLiked);

    const tabs = [
        {label: `Creations (${author.creations.length})`, key: 'item-1', children: <SingleItems content={author.creations} />},
        {label: `Collections (${author.collections.length})`, key: 'item-2', children: <Collections content={author.collections} />},
        {label: `Favorites (${likedItems.length})`, key: 'item-3', children: <SingleItems content={likedItems} />}
    ];

    return (
        <StyledAuthorItems>
            <div className="container">
                <StyledTabs tabs={tabs} />
            </div>
        </StyledAuthorItems>
    )
}

export default AuthorItems