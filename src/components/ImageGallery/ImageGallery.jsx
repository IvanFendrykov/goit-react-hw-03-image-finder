import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </List>
  );
};
