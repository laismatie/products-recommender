// getRecommendations.js
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

  let filtered = products.filter(product => {
    const productPreferences = product.preferences || [];
    const productFeatures = product.features || [];

    const hasMatchPreferences =
      selectedPreferences.length === 0 ||
      selectedPreferences.some(preferences => productPreferences.includes(preferences));

    const hasMatchFeatures =
      selectedFeatures.length === 0 ||
      selectedFeatures.some(features => productFeatures.includes(features));

    return hasMatchPreferences && hasMatchFeatures;
  });

  switch (selectedRecommendationType) {
    case 'SingleProduct':
      return filtered.length ? [filtered[filtered.length - 1]] : []; 
    case 'MultipleProducts':
      return filtered;
    default:
      return [];
  }
};

export default { getRecommendations };
