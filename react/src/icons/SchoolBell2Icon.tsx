import React from 'react';
import config from '../config';

interface SchoolBell2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SchoolBell2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/school-bell2)
 * @see {@link https://clicons.dev/icon/school-bell2}
 */
const SchoolBell2Icon = React.forwardRef<SVGSVGElement, SchoolBell2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.53206 10.7812L7.45047 10.9004C6.66553 12.0476 5.36503 12.7336 3.97498 12.7336H3.88C3.09757 12.7336 2.70573 13.6796 3.25899 14.2328L9.76716 20.741C10.3204 21.2943 11.2664 20.9024 11.2664 20.12V20.025C11.2664 18.635 11.9524 17.3345 13.0996 16.5495L13.2188 16.4679C15.333 15.0214 15.6129 12.0098 13.8015 10.1985C11.9902 8.38708 8.9786 8.66698 7.53206 10.7812Z'
    }
  ],
  [
    'path',
    {
      d: 'M19 17C18.8181 17.9846 18.3439 18.9124 17.5729 19.6565C16.8473 20.3569 15.9531 20.8035 15 21'
    }
  ],
  [
    'path',
    {
      d: 'M7 5C6.03843 5.20541 5.13629 5.67226 4.40427 6.40427C3.67226 7.13629 3.20541 8.03842 3 9'
    }
  ],
  [
    'path',
    {
      d: 'M13 8.80238L16.8892 3.87603C17.7435 2.79398 19.3506 2.69977 20.3254 3.67459C21.3002 4.64942 21.206 6.25653 20.124 7.11077L15.1976 11'
    }
  ],
  [
    'path',
    {
      d: 'M8 19.3137C7.08494 20.2288 5.60135 20.2288 4.68629 19.3137C3.77124 18.3987 3.77124 16.9151 4.68629 16'
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

SchoolBell2Icon.displayName = 'SchoolBell2Icon';
export default SchoolBell2Icon;
