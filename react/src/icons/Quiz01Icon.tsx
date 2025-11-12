import React from 'react';
import config from '../config';

interface Quiz01IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Quiz01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/quiz01)
 * @see {@link https://clicons.dev/icon/quiz01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Quiz01Icon = React.forwardRef<SVGSVGElement, Quiz01IconProps>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? 16;
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.8;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M10.4564 2.64012C11.3085 1.78663 12.6915 1.78663 13.5436 2.64012L14.553 3.65112C14.9625 4.06139 15.5186 4.29172 16.0983 4.29124L17.5269 4.29007C18.733 4.28909 19.7109 5.26702 19.7099 6.47306L19.7088 7.90166C19.7083 8.48139 19.9386 9.03745 20.3489 9.44705L21.3599 10.4564C22.2134 11.3085 22.2134 12.6915 21.3599 13.5436L20.3489 14.553C19.9386 14.9625 19.7083 15.5186 19.7088 16.0983L19.7099 17.5269C19.7109 18.733 18.733 19.7109 17.5269 19.7099L16.0983 19.7088C15.5186 19.7083 14.9625 19.9386 14.553 20.3489L13.5436 21.3599C12.6915 22.2134 11.3085 22.2134 10.4564 21.3599L9.44705 20.3489C9.03745 19.9386 8.48139 19.7083 7.90166 19.7088L6.47306 19.7099C5.26702 19.7109 4.28909 18.733 4.29007 17.5269L4.29124 16.0983C4.29172 15.5186 4.06139 14.9625 3.65112 14.553L2.64012 13.5436C1.78663 12.6915 1.78663 11.3085 2.64012 10.4564L3.65112 9.44705C4.06139 9.03745 4.29172 8.48139 4.29124 7.90166L4.29007 6.47306C4.28909 5.26702 5.26702 4.28909 6.47306 4.29007L7.90166 4.29124C8.48139 4.29172 9.03745 4.06139 9.44705 3.65112L10.4564 2.64012Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.992 17H12.001',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ]
];

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

Quiz01Icon.displayName = 'Quiz01Icon';
export default Quiz01Icon;
