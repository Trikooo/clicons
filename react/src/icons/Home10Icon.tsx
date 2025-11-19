import React from 'react';
import config from '../config';

interface Home10IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Home10Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/home10)
 * @see {@link https://clicons.dev/icon/home10}
 */
const Home10Icon = React.forwardRef<SVGSVGElement, Home10IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.9412 6.34883L10.7549 8.90093C11.1244 9.42085 11.3092 9.68081 11.4046 9.98004C11.5 10.2793 11.5 10.5987 11.5 11.2377V20H5.5C3.61438 20 2.67157 20 2.08579 19.4112C1.5 18.8225 1.5 17.8749 1.5 15.9797V11.2377C1.5 10.5987 1.5 10.2793 1.59541 9.98004C1.69082 9.68081 1.87557 9.42085 2.24507 8.90093L4.0588 6.34883C5.17165 4.78294 5.72807 4 6.5 4C7.27193 4 7.82835 4.78294 8.9412 6.34883Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 20V16C8.5 15.2523 8.5 14.8785 8.33923 14.6C8.23391 14.4176 8.08242 14.2661 7.9 14.1608C7.62154 14 7.24769 14 6.5 14C5.75231 14 5.37846 14 5.1 14.1608C4.91758 14.2661 4.76609 14.4176 4.66077 14.6C4.5 14.8785 4.5 15.2523 4.5 16V20'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 20H18.5C20.3856 20 21.3284 20 21.9142 19.4142C22.5 18.8284 22.5 17.8856 22.5 16V11.4482C22.5 10.7315 22.5 10.3732 22.3805 10.0432C22.2611 9.7133 22.0317 9.43802 21.5729 8.88746L18.6994 5.43926C18.1096 4.73152 17.8147 4.37764 17.4116 4.18882C17.0084 4 16.5478 4 15.6265 4H6.5'
    }
  ],
  [
    'path',
    {
      d: 'M22 10H11.5'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

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
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

Home10Icon.displayName = 'Home10Icon';
export default Home10Icon;
