import React from 'react';
import config from '../config';

interface Wallet5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Wallet5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/wallet5)
 * @see {@link https://clicons.dev/icon/wallet5}
 */
const Wallet5Icon = React.forwardRef<SVGSVGElement, Wallet5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 10H6.19722C6.91179 10 7.26908 10 7.58952 10.112C7.7852 10.1804 7.96906 10.2788 8.13451 10.4037C8.40544 10.6082 8.60363 10.9054 9 11.5C9.39637 12.0946 9.59456 12.3918 9.86549 12.5963C10.0309 12.7212 10.2148 12.8196 10.4105 12.888C10.7309 13 11.0882 13 11.8028 13H12.1972C12.9118 13 13.2691 13 13.5895 12.888C13.7852 12.8196 13.9691 12.7212 14.1345 12.5963C14.4054 12.3918 14.6036 12.0946 15 11.5C15.3964 10.9054 15.5946 10.6082 15.8655 10.4037C16.0309 10.2788 16.2148 10.1804 16.4105 10.112C16.7309 10 17.0882 10 17.8028 10H22'
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

Wallet5Icon.displayName = 'Wallet5Icon';
export default Wallet5Icon;
