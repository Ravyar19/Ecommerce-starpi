import Product from '../product/Product';
import p1 from '../../assets/products/p1.png';
import p2 from '../../assets/products/p2.png';
import p3 from '../../assets/products/p3.png';
import p4 from '../../assets/products/p4.png';
import p5 from '../../assets/products/p5.png';
import p6 from '../../assets/products/p6.png';
import p7 from '../../assets/products/p7.png';
import p8 from '../../assets/products/p8.png';

function Products() {
  return (
    <div className='p-10'>
      <div className='grid grid-cols-4 gap-4'>
        <Product img={p1} title='Chair' desc='Comfy Chair' price='$32.22' />
        <Product img={p2} title='Chair' desc=' Chair' price='$22.22' />
        <Product img={p3} title='Chair' desc=' Chair' price='$42.22' />
        <Product img={p4} title='Chair' desc=' Chair' price='$52.22' />
        <Product img={p5} title='Chair' desc=' Chair' price='$62.22' />
        <Product img={p6} title='Chair' desc=' Chair' price='$72.22' />
        <Product img={p7} title='Chair' desc=' Chair' price='$82.22' />
        <Product img={p8} title='Chair' desc=' Chair' price='$92.22' />
      </div>
    </div>
  );
}

export default Products;
