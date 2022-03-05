using Core.Entities;

namespace Core.Interfaces
{
    public interface IProductRepository
    {

        Task<Product> GetProductByIdAsync(int id);
        Task<IReadOnlyList<Product>> GetProductAsync();//IReadOnly is to make more specific on the list
        Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync();
        Task<IReadOnlyList<ProductType>> GetProductTypesAsync();

    }
}