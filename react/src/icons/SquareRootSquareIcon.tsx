import React from 'react';
import config from '../config';

interface SquareRootSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SquareRootSquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/square-root-square)
 * @see {@link https://clicons.dev/icon/square-root-square}
 */
const SquareRootSquareIcon = React.forwardRef<SVGSVGElement, SquareRootSquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 7.99011H12.5167C11.7 7.99011 11.46 8.03011 11.299 8.85416L9.95406 14.4594C9.62198 15.7875 9.45066 15.9835 9.12 16.0101C8.76 15.8901 8.58977 15.5824 7.98 14.3301L7.63508 13.5701C7.37243 13.0307 7.28553 12.8031 7.02 12.7301C6.62037 12.6201 6.30716 12.9309 6 13.1301M13.1035 11.4222C13.5235 11.4083 13.9795 11.3902 14.2291 11.8062C14.5724 12.4986 15.1156 13.9174 15.3175 14.3675C15.4185 14.5406 15.4795 14.6902 15.8395 14.8102C16.1088 14.8448 16.4995 14.8542 16.4995 14.8542M16.7407 11.41C15.8945 11.41 15.3905 12.356 14.9167 12.9488C14.3074 13.8555 13.6807 14.87 12.8887 14.842'
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

SquareRootSquareIcon.displayName = 'SquareRootSquareIcon';
export default SquareRootSquareIcon;
