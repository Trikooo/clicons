import React from 'react';
import config from '../config';

interface FishFoodIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FishFoodIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/fish-food)
 * @see {@link https://clicons.dev/icon/fish-food}
 */
const FishFoodIcon = React.forwardRef<SVGSVGElement, FishFoodIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.00781 12L5.99883 12'
    }
  ],
  [
    'path',
    {
      d: 'M11 16.0418C11.4635 16.1947 11.9076 16.3708 12.3099 16.6525M12.3099 16.6525C13.3507 17.3811 14 18.5764 14 19.8845C14 19.9484 13.9465 20.0003 13.8819 20C10.9648 19.9871 9.65844 19.4932 9.1094 18.6782L8 16.8568C5.50848 16.3537 3.21828 14.7625 2 12.0833C5 5.48589 14.5 5.48589 17.5 12.0833M12.3099 16.6525C14.4801 15.9922 16.4151 14.4692 17.5 12.0833M12.3099 7.5142C13.3507 6.78564 14 5.59024 14 4.28218C14 3.4556 9.69172 4.62406 9.1094 5.48846L8 7.30982M17.5 12.0833C17.8333 11.4236 19.6 9.11447 22 9.11447C21.1667 9.93915 19.8 13.0729 21 15.0522C19.8 15.0522 18 12.7431 17.5 12.0833Z'
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

FishFoodIcon.displayName = 'FishFoodIcon';
export default FishFoodIcon;
