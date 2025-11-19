import React from 'react';
import config from '../config';

interface GolfCartIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GolfCartIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/golf-cart)
 * @see {@link https://clicons.dev/icon/golf-cart}
 */
const GolfCartIcon = React.forwardRef<SVGSVGElement, GolfCartIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.99821 18.9818C3.07289 18.9818 2 19.2182 2 17.9874V15.8389C2 14.1187 2 13.2587 2.49899 12.6951C3.27867 11.8144 4.78799 12.0211 5.8359 12.0211C6.64499 12.0211 7.64108 11.9089 8.32617 12.4323C8.77967 12.7788 8.99564 13.352 9.42757 14.4984C9.59263 14.9364 9.71105 15.5422 10.1161 15.8216C10.3729 15.9986 10.7078 15.9986 11.3776 15.9986H13.4897C14.8134 15.9986 15.2614 14.9734 15.9875 14.0099H17.5416C19.7316 14.0099 21.7599 15.286 21.9669 17.6407C22.0083 18.112 22.1219 18.9818 21.4271 18.9818H19.9839M15.9875 18.9818H8.49419'
    }
  ],
  [
    'circle',
    {
      cx: '6',
      cy: '19',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '18',
      cy: '19',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M4 12V3'
    }
  ],
  [
    'path',
    {
      d: 'M19 14L16 3'
    }
  ],
  [
    'path',
    {
      d: 'M2 3H18'
    }
  ],
  [
    'path',
    {
      d: 'M16 14L14 11M13 12L15 10'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 12C6.5 9.97001 6.38046 8 4 8'
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

GolfCartIcon.displayName = 'GolfCartIcon';
export default GolfCartIcon;
