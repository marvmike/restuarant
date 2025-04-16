// Helper functions for scroll behavior

/**
 * Scrolls to a specific element by ID with optional offset and smooth behavior
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 0)
 */
export const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };
  
  /**
   * Determines which section is currently in view
   * @param {Array} sectionIds - Array of section IDs
   * @param {number} offset - Offset to consider a section in view
   * @returns {string} - ID of the active section
   */
  export const getActiveSection = (sectionIds, offset = 100) => {
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (!element) continue;
      
      const rect = element.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        return id;
      }
    }
    
    return sectionIds[0];
  };
  
  /**
   * Sets up scroll event listeners to update active navigation
   * @param {Array} sectionIds - Array of section IDs
   * @param {Function} callback - Function to call with active section ID
   * @returns {Function} - Cleanup function to remove event listener
   */
  export const setupScrollListeners = (sectionIds, callback) => {
    const handleScroll = () => {
      const activeSection = getActiveSection(sectionIds);
      callback(activeSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();
    
    // Return cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };