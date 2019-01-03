import checkPropTypes from "check-prop-types";

/**
 * Return ShallowWrapper containing node(s) with the given [data-test] value
 *
 * @param wrapper
 * @param val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		'prop',
		component.name
	);

	expect(propError).toBeUndefined();
};
