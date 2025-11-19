import React from 'react';
import config from '../config';

interface TankTopIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TankTopIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tank-top)
 * @see {@link https://clicons.dev/icon/tank-top}
 */
const TankTopIcon = React.forwardRef<SVGSVGElement, TankTopIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.6168 1C16.8637 1.76959 17 2.6141 17 3.5C17 7.08985 14.7614 10 12 10C9.23858 10 7 7.08985 7 3.5C7 2.6141 7.13633 1.76959 7.3832 1'
    }
  ],
  [
    'path',
    {
      d: 'M17.5002 17C19.4331 17 21 15.4315 21 13.4966C21 12.2213 20.2104 11.4762 19.6921 10.4128C18.6981 8.37328 19.6776 5.84899 20.2997 3.71716C20.4253 3.28669 20.2309 2.8325 19.8419 2.61L17.2549 1.13018C17.0883 1.03491 16.898 0.988697 16.7067 1.00235C15.0599 1.11988 13.1608 1.53312 12 2.98622C10.8392 1.53312 8.94012 1.11988 7.29334 1.00235C7.102 0.988697 6.91166 1.03491 6.7451 1.13018L4.15808 2.61C3.76911 2.8325 3.57474 3.28669 3.70035 3.71716C4.32241 5.84899 5.30191 8.37328 4.30792 10.4128C3.78962 11.4762 3 12.2213 3 13.4966C3 15.4315 4.56694 17 6.49985 17'
    }
  ],
  [
    'path',
    {
      d: 'M14 16.25C12.5235 15.632 11.661 15.5364 10 16.25'
    }
  ],
  [
    'path',
    {
      d: 'M5 17V22'
    }
  ],
  [
    'path',
    {
      d: 'M19 17V22'
    }
  ],
  [
    'path',
    {
      d: 'M17 3C15.2742 3.45112 14 5.03024 14 6.90903C14 7.67442 14.2115 8.39008 14.5788 9M7 3C8.72577 3.45112 10 5.03024 10 6.90903C10 7.67442 9.78852 8.39008 9.4212 9'
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

TankTopIcon.displayName = 'TankTopIcon';
export default TankTopIcon;
