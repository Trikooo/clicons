import React from 'react';
import config from '../config';

interface BabyBoyDressIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BabyBoyDressIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/baby-boy-dress)
 * @see {@link https://clicons.dev/icon/baby-boy-dress}
 */
const BabyBoyDressIcon = React.forwardRef<SVGSVGElement, BabyBoyDressIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.94724 9.003C5.94724 9.003 3.68265 11.252 3.01654 10.9766C2.07687 10.5882 1.67051 6.8204 2.30951 6.24512L4.76679 4.03287C5.90144 3.01137 5.93084 3 7.43853 3H8.95703C9.1835 4.3592 10.4956 5.99207 12 5.99207C13.5044 5.99207 14.8165 4.3592 15.043 3H16.5615C18.0692 3 18.0986 3.01136 19.2332 4.03287L21.6905 6.24512C22.3295 6.8204 21.9231 10.5882 20.9835 10.9766C20.3173 11.252 18.0489 9.003 18.0489 9.003'
    }
  ],
  [
    'path',
    {
      d: 'M6 8V18.5267C6 19.2323 6.11985 19.6092 6.75491 19.9496C9.3676 21.3501 14.6324 21.3501 17.2451 19.9496C17.8802 19.6092 18 19.2323 18 18.5267L18 8'
    }
  ],
  [
    'path',
    {
      d: 'M6 10C8 12.6667 16 12.6667 18 10'
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

BabyBoyDressIcon.displayName = 'BabyBoyDressIcon';
export default BabyBoyDressIcon;
