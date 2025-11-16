import React from 'react';
import config from '../config';

interface GlobalRefreshIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GlobalRefreshIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/global-refresh)
 * @see {@link https://clicons.dev/icon/global-refresh}
 */
const GlobalRefreshIcon = React.forwardRef<SVGSVGElement, GlobalRefreshIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.7423 17.4915L20.5917 17.9414C21.1874 18.257 21.4853 18.4148 21.762 18.2331C22.0386 18.0513 22.0173 17.7661 21.9747 17.1958C21.7298 13.9197 17.6728 11.6731 14.8672 13.8841M15.2558 17.4915L14.4065 17.0416C13.8112 16.7262 13.5135 16.5685 13.2365 16.7515C12.9595 16.9345 12.9822 17.2187 13.0275 17.7872C13.2864 21.0359 17.3202 23.3133 20.0565 21.1514'
    }
  ],
  [
    'path',
    {
      d: 'M11.0107 22C5.95135 21.497 2 17.2229 2 12.0247C2 6.48823 6.48245 2 12.0118 2C17.308 2 21.6437 6.11759 22 11.33'
    }
  ],
  [
    'path',
    {
      d: 'M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2'
    }
  ],
  [
    'path',
    {
      d: 'M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21'
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

GlobalRefreshIcon.displayName = 'GlobalRefreshIcon';
export default GlobalRefreshIcon;
