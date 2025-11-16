import React from 'react';
import config from '../config';

interface TumblrLogoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * @name TumblrLogoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tumblr-logo)
 * @see {@link https://clicons.dev/icon/tumblr-logo}
 */
const TumblrLogoIcon = React.forwardRef<SVGSVGElement, TumblrLogoIconProps>(
  ({ size, color, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M14.358 13.637a.27.27 0 0 0-.276.012c-.626.411-1.26.62-1.887.62-.337 0-.626-.075-.885-.23-.176-.105-.34-.287-.399-.445-.057-.15-.056-.556-.055-1.117v-3.422h2.846a.27.27 0 0 0 .27-.27v-2.403a.27.27 0 0 0-.27-.27h-2.846v-2.843a.27.27 0 0 0-.27-.269h-1.916a.27.27 0 0 0-.268.237c-.08.658-.23 1.205-.445 1.626-.21.414-.493.775-.843 1.073-.28.239-.761.47-1.428.687a.27.27 0 0 0-.186.256v1.907c0 .148.12.269.27.269h1.56v4.451c0 .656.07 1.15.213 1.51.146.365.406.709.771 1.022.36.308.797.549 1.302.716.49.16.88.246 1.537.246a6.98 6.98 0 0 0 1.575-.171 8.334 8.334 0 0 0 1.617-.589.27.27 0 0 0 .155-.243v-2.123a.27.27 0 0 0-.142-.237Z'
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
        if (!processedAttrs.fill) processedAttrs.fill = finalColor;
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
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

TumblrLogoIcon.displayName = 'TumblrLogoIcon';
export default TumblrLogoIcon;
