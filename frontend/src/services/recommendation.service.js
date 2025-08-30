function matchPreferences(product, selectedPreferences) {
  const productPreferences = product.preferences || [];
  return (
    selectedPreferences.length === 0 ||
    selectedPreferences.some(preferences => productPreferences.includes(preferences))
  );
}

function matchFeatures(product, selectedFeatures) {
  const productFeatures = product.features || [];
  return (
    selectedFeatures.length === 0 ||
    selectedFeatures.some(features => productFeatures.includes(features))
  );
}

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products
) => {
  if (!products || products.length === 0) return [];
  
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = '',
  } = formData || {};

  let filtered = products.filter(product =>
    matchPreferences(product, selectedPreferences) &&
    matchFeatures(product, selectedFeatures)
  );

  switch (selectedRecommendationType) {
    case 'SingleProduct':
      return filtered.length ? [filtered[filtered.length - 1]] : []; 
    case 'MultipleProducts':
      return filtered;
    default:
      return [];
  }
};

const recommendationService = { getRecommendations };
export default recommendationService;
