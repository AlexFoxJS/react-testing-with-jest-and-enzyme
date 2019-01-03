/**
 * Return ShallowWrapper containing node(s) with the given [data-test] value
 *
 * @param wrapper
 * @param val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);