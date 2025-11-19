import React from 'react';
import config from '../config';

interface BulletproofVestIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BulletproofVestIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bulletproof-vest)
 * @see {@link https://clicons.dev/icon/bulletproof-vest}
 */
const BulletproofVestIcon = React.forwardRef<SVGSVGElement, BulletproofVestIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.4975 2H10.5025C8.88452 2 8.07552 2 7.52387 2.48909C6.38066 3.50265 6.52582 6.17233 6.3215 7.63432C6.21198 8.41794 5.55547 9 4.78113 9C4.42436 9 4.11241 9.24911 4.02908 9.60373C3.32919 12.5822 1.93142 18.3709 4.41467 20.8575C5.55563 22 7.06507 22 10.0839 22H13.9161C16.9349 22 18.4444 22 19.5853 20.8575C22.0686 18.3709 20.6708 12.5822 19.9709 9.60372C19.8876 9.24911 19.5756 9 19.2189 9C18.4445 9 17.788 8.41793 17.6785 7.63431C17.4742 6.17232 17.6194 3.50267 16.4762 2.4891C15.9246 2 15.1156 2 13.4975 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 14H3.5M5 18H3.5'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 14H19M20.5 18H19'
    }
  ],
  [
    'path',
    {
      d: 'M9.58056 13.5806C10.3546 12.8065 13.6454 12.8065 14.4194 13.5806C15.1935 14.3546 15.1935 17.6454 14.4194 18.4194C13.6454 19.1935 10.3546 19.1935 9.58056 18.4194C8.80648 17.6454 8.80648 14.3546 9.58056 13.5806Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 2C15 3.65685 13.6569 5 12 5C10.3431 5 9 3.65685 9 2'
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

BulletproofVestIcon.displayName = 'BulletproofVestIcon';
export default BulletproofVestIcon;
