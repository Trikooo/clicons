import React from 'react';
import config from '../config';

interface SimcardDualIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SimcardDualIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/simcard-dual)
 * @see {@link https://clicons.dev/icon/simcard-dual}
 */
const SimcardDualIcon = React.forwardRef<SVGSVGElement, SimcardDualIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 13.8868C2 10.2256 2 8.39501 3.07857 7.23516C3.11842 7.19231 3.15919 7.15037 3.20085 7.10939C4.32848 6 6.10821 6 9.66768 6C10.5112 6 10.9176 6.003 11.3044 6.15149C11.6769 6.29448 11.9889 6.56191 12.6129 7.09679L14.3209 8.56074C15.1466 9.26848 15.5594 9.62236 15.7797 10.1061C16 10.5899 16 11.1427 16 12.2482V14.8C16 17.7998 16 19.2997 15.2573 20.3511C15.0174 20.6907 14.7271 20.9894 14.3969 21.2361C13.3747 22 11.9165 22 9 22C6.08354 22 4.62531 22 3.60306 21.2361C3.27291 20.9894 2.98258 20.6907 2.74271 20.3511C2 19.2997 2 17.7998 2 14.8V13.8868Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.9779 16C18.4869 16 19.7414 16 20.6209 15.3316C20.9049 15.1157 21.1547 14.8544 21.361 14.5572C22 13.6372 22 12.3248 22 9.7V7.46718C22 6.49983 22 6.01616 21.8105 5.59286C21.621 5.16956 21.2658 4.85992 20.5554 4.24065L19.0861 2.95969C18.5492 2.49168 18.2808 2.25767 17.9604 2.13256C17.6276 2.00263 17.278 2 16.5523 2C13.4901 2 11.959 2 10.9889 2.97071C10.953 3.00658 10.918 3.04327 10.8837 3.08076C10.2922 3.72771 10.0777 4.61316 10 6'
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

SimcardDualIcon.displayName = 'SimcardDualIcon';
export default SimcardDualIcon;
